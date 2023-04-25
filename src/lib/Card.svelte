<script>
    export let _id
    export let Naslov
    export let Trajanje
    export let Leto
    export let Reziser
    export let Ocena
    export let Ogledan
    export let Image
</script>


<!--
    Poskusna faza

    <div class="shadow-xl rounded-md ml-20 p-20">
    <div class="flex flex-row items-center justify-around">
        <img height = "200" width="200" src={Image} alt="Fotografija"/>
        <div class="flex flex-col items-center">
            <p class="text-4xl">Naslov filma: {Naslov}</p>
            <p class="text-xl">Trajanje filma: {Trajanje} minut</p>
            <p class="text-xl">Leto izvajanja: {Leto}</p>
            <p class="text-xl">Reziser: {Reziser}</p>
            <p class="text-xl">Ocena: {Ocena}</p>
            <p>Ogledan: {Ogledan}</p>
        </div>
        
             <div class=" p-3 flex">
            <p> ID: {JSON.stringify(_id)}</p>
        </div>
         
    </div>		
</div>
-->


<div class="max-w-sm rounded-xl overflow-hidden shadow-lg">
    <img class="max-h-64 max-w-xs" src={Image} alt="Sunset in the mountains">
    <div class="px-6 py-6">
      <p class="font-bold text-2xl mb-2 {Ogledan == true ? "text-green-600" : "text-red-400"} ">{Naslov}</p>
      <p class="text-gray-700">Trajanje filma: {Trajanje} minut</p>
      <p class="text-gray-700">Leto izvajanja: {Leto}</p>
      <p class="text-gray-700">Reziser: {Reziser}</p>
      <p class="text-gray-700">Ocena: {Ocena}</p>
    </div>
  </div>