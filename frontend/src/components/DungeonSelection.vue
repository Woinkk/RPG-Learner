<template>
    <v-container>
        <v-card
        dark
        class="mx-auto"
        >
            <v-img
                class="white--text align-end"
                height="200px"
                src="../assets/dungeon_background.jpg"
            >
                <v-card-title>Donjon</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Pars affronter des monstres pour obtenir du meilleur équipement ainsi que de l'experience.</v-card-subtitle>

            <v-card-text class="text--primary">
                <!-- Texte -->
            </v-card-text>

            <v-card-actions>
                <!-- Action -->
                
            </v-card-actions>
            <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">Nom</th>
                        <th class="text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in quizz.Quizz" :key="index">
                        <td>{{ item.name }}</td>
                        <td>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">                                                                                                                                   
                                <v-icon
                                    class="mr-2"
                                    @click="playDungeon(item.id)"
                                    v-on="on"
                                >
                                    mdi-pencil
                                </v-icon>
                                </template>
                                <span>Lancer ce donjon</span>
                            </v-tooltip>
                        </td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
        </v-card>
        <v-card
        class="mx-auto"
        height="200px"
        flat
        >
        </v-card>
        <v-card
        class="mx-auto"
        height="200px"
        flat
        >
        </v-card>
    </v-container>
</template>


<script>
import { getAllQuizzByTeacherAndClasses } from "../../services/api.js";
export default {
  name: "DungeonSelection",
  components: {
      
  },
  data: () => ({
      quizz: []
  }),
  methods: {
      getAllQuizzByTeacherAndClasses: async function () {
          this.quizz = await getAllQuizzByTeacherAndClasses();
          console.log(this.quizz);
      },
      playDungeon: function (idQuizz) {
        this.$router.push(`Dungeon/${idQuizz}`);
      }
  },
  computed: {

  },
  created() {
      this.getAllQuizzByTeacherAndClasses();
  }
};
</script>
