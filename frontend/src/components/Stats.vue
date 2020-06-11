<template>
<v-container>

<v-row>
<v-col 
  cols="6"
  md="4">
<v-menu open-on-hover top offset-y transition="fab-transition">
  <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on" v-if="selectedClasse === null">Trier par classe</v-btn>
      <v-btn color="primary" dark v-on="on" v-else>{{selectedClasse.name}}</v-btn>
  </template>
  <v-list>
    <v-list-item
      v-for="(item, index) in myClasse"
      :key="index"
      @click="selectMyClasses(item)"
    >
      <v-list-item-title>{{ item.name }}</v-list-item-title>
    </v-list-item>
    <v-list-item @click="selectMyClasses(null)">
      <v-list-item-title></v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>

<v-text-field
  v-model="search"
  append-icon="mdi-magnify"
  label="Rechercher par prénom"
  single-line
  hide-details
  align="right"
  dark="true"
  filled="true"
  ></v-text-field>
<v-simple-table fixed-header dark>
  <template v-slot:default>
    <thead>
      <tr>
        <th class="text-left">Nom</th>
        <th class="text-left">Prénom</th>
        <th class="text-left">Classe</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in computeClass" 
      :key="index"
      @click="selectStudent(item)"
      >
        <td>
          {{item.lastname}}
        </td>
        <td>
          {{item.firstname}}
        </td>
        <td>
          {{item.class}}
        </td>
      </tr>
    </tbody>
  </template>
</v-simple-table>
</v-col>

<v-col id="chart">
    <apexchart type="line" height="350" :options="chartOptions" :series="series" :key="chartOptions.xaxis.categories"></apexchart>
</v-col>
</v-row>

</v-container>
</template>

<script>
import { myClasses } from "../../services/api.js";
import { classesStudents } from "../../services/api.js";
import { statsStudent } from "../../services/api.js";
export default {
    name: "Stats",
    components: {
    
    },
    data: () => ({
        myClasse: null,
        selectedClasse: null,
        value: null,
        selectedStudent: null,
        allStudent: null,
        search: null,
        series: [{
          name: "Pourcentage de bonnes réponses",
          data: [],
        }],
        chartOptions: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: "Pourcentage de bonne réponse de l'élève par quizz",
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            title: {
              text: 'Quizz par ordre chronologique'
            },
            categories: [],
          },
          yaxis: {
            title: {
                text: '%'
            },
            min: 0,
            max: 100
          },
        },
      }),
    computed: {
      computeClass: function() {
      if(this.allStudent !== null) {
        if(this.search !== null && this.selectedClasse === null && this.search !== "") return this.allStudent.filter(i => i.firstname === this.search);
        else if(this.selectedClasse !== null && this.search === null) return this.allStudent.filter(i => i.class === this.selectedClasse.name);
        else if(this.selectedClasse !== null && this.search !== null) {
          let a = this.allStudent.filter(i => i.class === this.selectedClasse.name);
          return a.filter(i => i.firstname === this.search);
        }
        else return this.allStudent;
      } else {
        return[];
      }
    }
    
    },
    methods: {
        selectMyClasses: async function(classe) {
          this.selectedClasse = classe;
        },
        selectStudent: async function (student) {
          const req = await statsStudent(student);
          this.chartOptions.title.text = "Pourcentage de bonne réponse de "+ student.firstname +" "+ student.lastname +" par quizz"
          this.chartOptions.xaxis.categories = [];
          this.series[0].data = [];
          if(req !== null) {
            for(let i = 0; i < req.length; i++) {
              this.chartOptions.xaxis.categories.push(req[i].quizzName);
              this.series[0].data.push(req[i].quizzGood);
            }
            console.log(this.chartOptions.xaxis.categories);
          }
        },
        MyClasses: async function() {
        var students;
        var list = [];
        const req = await myClasses();
        if (req !== null) {
          this.myClasse = req;
          for(let i = 0; i < req.length; i++) {
            students = await classesStudents(req[i]);
            if(students !== null) {
              for(let j = 0; j < students.length; j++) {
                students[j].class = req[i].name;
                list.push(students[j]);
              }
            }
          }
          this.allStudent = list;
        }
        return;
      },
  },
  created() {
      this.MyClasses();
      this.MyQuizzes();
    }
}
</script>