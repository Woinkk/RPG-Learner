<template>
    <v-container style="position: static; height: 100%">
        <div style="position: static; height: 50%">
            <v-card
                class="d-flex"
                outlined
                tile
                height="100%"
                width="100%"
            >
                <v-card-text class="text-center">
                    <h1>Question</h1>
                </v-card-text>
            </v-card>
        </div>
        <br>
        <div style="position: static; height: 45%">
            <v-card
                class="d-flex"
                outlined
                tile
                height="100%"
                width="100%"
            >
                <v-card-text>
                    <v-btn large style="position: absolute; top: 0%; left: 0%; margin:15px;">Réponse 1</v-btn>
                    <v-btn large style="position: absolute; top: 0%; right: 0%; margin:15px;">Réponse 2</v-btn>
                    <br>
                    <v-btn large style="position: absolute; bottom: 0%; left: 0%; margin:15px;">Réponse 3</v-btn>
                    <v-btn large style="position: absolute; bottom: 0%; right: 0%; margin:15px;">Réponse 4</v-btn>
                    <div style="margin-left: auto; margin-right: auto; width: 21em;">
                        <Timer :time="20" v-on:timePassed="timePassed"/>
                    </div>
                </v-card-text>
            </v-card>
        </div>
    </v-container>
</template>


<script>
import Timer from "../components/Timer.vue";

export default {
  name: "FightingInterface",
  components: {
      Timer,
  },
  data: () => ({

  }),
  methods: {
    timePassed: async function (timePassed) {
        console.log(timePassed);
    }
  }
};
</script>
