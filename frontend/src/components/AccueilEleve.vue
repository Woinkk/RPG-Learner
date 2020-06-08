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
                height="100%"
                outlined
                tile
                >
                .col-6 .col-md-5
                </v-card>
            </v-col>
            <v-col
                name="cards-container"
                cols="12"
                md="7"
            >
                <v-card
                class="pa-2"
                outlined
                tile
                >
                    <v-card
                        class="mx-auto"
                        outlined
                    >
                        <v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                        ></v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                        <v-btn text>Button</v-btn>
                        <v-btn text>Button</v-btn>
                        </v-card-actions>
                    </v-card>
                    <br>
                    <v-card
                        class="mx-auto"
                        outlined
                    >
                        <v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                        ></v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                        <v-btn text>Button</v-btn>
                        <v-btn text>Button</v-btn>
                        </v-card-actions>
                    </v-card>
                    <br>
                    <v-card
                        class="mx-auto"
                        outlined
                    >
                        <v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4">OVERLINE</div>
                            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                        ></v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                        <v-btn text>Button</v-btn>
                        <v-btn text>Button</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-card>
            </v-col>
            <v-col
                name="character-container"
                class="d-flex justify-center"
                cols="6"
                md="5"
            >
                <v-col class="d-inline justify-center">
                    <div>
                        <v-card
                        outlined
                        tile
                        >
                        HP: 2<br>
                        Vitesse: 2<br>
                        Force: 1<br>
                        Point de compétence disponible: 0<br>
                        </v-card>
                    </div>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
export default {
  name: "CreateQuizz",
  components: {

  },
  data: () => ({

  }),
  methods: {
    
  }
};
</script>
