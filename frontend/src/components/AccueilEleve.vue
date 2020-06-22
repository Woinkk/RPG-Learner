<template>
    <v-container>
        <v-row>
            <v-col
                name="character-container"
                class="d-flex justify-center"
                cols="6"
                md="5"
                
            >
                <v-card
                class="d-flex justify-center"
                width="97%"
                flat
                >
                .col-6 .col-md-5
                <v-card-text style="position: absolute; bottom: 0px;">
                    <div>
                        <v-card
                        outlined
                        tile
                        >
                        <v-row style="position: relative; left: 2.5%;">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-img max-width="20" max-height="20" src="../assets/heart-RPG.png" v-on="on"></v-img>
                                </template>
                            <span>Point de vie</span>
                            </v-tooltip>: 2<br>
                        </v-row>
                        <v-row style="position: relative; left: 2.5%;">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-img max-width="20" max-height="20" src="../assets/speed-boot-RPG.png" v-on="on"></v-img>
                                </template>
                            <span>Vitesse</span>
                            </v-tooltip>: 2<br>
                        </v-row>
                        <v-row style="position: relative; left: 2.5%;">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-img max-width="20" max-height="20" src="../assets/strength-RPG.png" v-on="on"></v-img>
                                </template>
                            <span>Force</span>
                            </v-tooltip>: 1<br>
                        </v-row>
                        Point de compétence disponible: 0<br>
                        </v-card>
                    </div>
                </v-card-text>
                </v-card>
            </v-col>
            <v-col
                name="cards-container"
                cols="12"
                md="7"
            >
                <v-card
                class="d-flex justify-center"
                flat
                >
                    <CardsStudent></CardsStudent>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import CardsStudent from "./CardsStudent";
export default {
  name: "CreateQuizz",
  components: {
      CardsStudent,
  },
  data: () => ({

  }),
  methods: {
    
  }
};
</script>
