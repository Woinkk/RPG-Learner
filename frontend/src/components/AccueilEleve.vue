<template>
    <v-container class="grey lighten-5">
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
                outlined
                tile
                >
                .col-6 .col-md-5
                <v-card-text style="position: absolute; bottom: 0px;">
                    <div>
                        <v-card
                        outlined
                        tile
                        >
                        HP: 2<br>
                        Vitesse: 2<br>
                        Force: 1<br>
                        Point de compétence disponible: 0<br>
                        <inventory></inventory>
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
                outlined
                tile
                >
                    <CardsStudent></CardsStudent>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import inventory from "./Inventory"
import CardsStudent from "./CardsStudent";
export default {
  name: "CreateQuizz",
  components: {
      CardsStudent,
      inventory,
  },
  data: () => ({

  }),
  methods: {
    
  }
};
</script>
