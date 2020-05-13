<template>
      <v-col cols="12">
        <v-card color="#295665" dark>
          <v-card-title class="headline">Modifier un quizz</v-card-title>

          <v-card-subtitle>Un quizz est une série de question.</v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="switchToCreation">Créer un quizz</v-btn>
          </v-card-actions>
        <v-card>
        <v-card-title>
            Mes quizz
            <v-spacer></v-spacer>
            <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="myQuizz"
                :search="search"
            >
                <template v-slot:item.actions="{ item }">                                                                                                                                   
                    <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                    >
                        mdi-pencil
                    </v-icon>
                    <v-icon
                        small
                        @click="deleteItem(item)"
                    >
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>
        </v-card>
        </v-card>
      </v-col>
</template>


<script>
export default {
  name: "CreateQuizz",
  components: {
      
  },
  data () {
      return {
        myQuizz: [
            {
                name: "Les multiplications",
                matiere: "Mathématique",
                subject: "Multiplication"
            },
            {
                name: "Les additions",
                matiere: "Mathématique",
                subject: "Addition"
            }
        ],
        search: '',
        headers: [
            {
            text: 'Quizz',
            align: 'start',
            sortable: false,
            value: 'name',
            },
            { text: 'Matière', value: 'matiere' },
            { text: 'Sujet', value: 'subject' },
            { text: 'Actions', value: 'actions', sortable: false },
        ]
    }
  },
  methods: {
    switchToCreation: function () {
        this.$emit('switchMode');
    },
    deleteItem: function (item) {
        console.log(item.name);
    }
  }
};
</script>
