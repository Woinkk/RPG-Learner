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
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">                                                                                                                                   
                            <v-icon
                                class="mr-2"
                                @click="editQuizz(item.id)"
                                v-on="on"
                            >
                                mdi-pencil
                            </v-icon>
                        </template>
                        <span>Editer ce quizz</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-icon
                                @click="deleteQuizz(item.id)"
                                v-on="on"
                            >
                                mdi-delete
                            </v-icon>
                        </template>
                        <span>Supprimer ce quizz</span>
                    </v-tooltip>
                </template>
            </v-data-table>
        </v-card>
        </v-card>
      </v-col>
</template>


<script>
import { getQuizz, deleteQuizz } from "../../services/api.js";

export default {
  name: "CreateQuizz",
  components: {
      
  },
  created() {
      this.getQuizzInMyQuizz();
  },
  data () {
      return {
        myQuizz: [],
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
    deleteQuizz: async function (itemId) {
        console.log(itemId);
        await deleteQuizz(itemId);
        this.myQuizz = [];
        this.getQuizzInMyQuizz();
    },
    getQuizzInMyQuizz: async function () {
        this.myQuizz = await getQuizz();
        console.log("LE QUIZZ", this.myQuizz);
    },
    editQuizz: function (itemId) {
        this.$router.push(`QuizzModification/${itemId}`);
    }
  }
};
</script>
