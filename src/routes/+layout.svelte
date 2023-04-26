<script>
  import "../app.css";
</script>

<nav class="p-5 bg-blue-500">
    <ul class="flex">
        <li class="mr-6 font-bold text-white">
            <a href="/">Domov</a>
        </li>
        <li class="mr-6 font-bold text-white">
            <a href="/Dodaj">Dodaj</a>
        </li>
        <li class="mr-6 font-bold text-white">
            <a href="/PregledVse">Pregled</a>
        </li>
    </ul>
</nav>

<!--Tu mora biti tu, da se "slot" zamenja z dejanskim contentom-->
<slot></slot>


