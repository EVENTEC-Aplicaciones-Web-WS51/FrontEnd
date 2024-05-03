<template>
  <div>Consumo de API</div>


  <Card style="width: 22rem; overflow: hidden;">
    <template #header>
      <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
      </p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <Button label="Cancel" severity="secondary" outlined class="w-full"></Button>
        <Button label="Save" class="w-full"></Button>
      </div>
    </template>
  </Card>



</template>

<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
export default {
  name: "EventsComponent",
  components: {
    Card,
    Button
  }
}
</script>

<style scoped>

</style>
