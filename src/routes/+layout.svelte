<script>
  import "../app.css";
</script>

<nav>
    <ul>
        <li>
            <a href="/Domov">Domov</a>
        </li>
        <li>
            <a href="/Domov/Dodaj">Dodaj</a>
        </li>
        <li>
            <a href="/Domov/Odstrani">Odstrani</a>
        </li>
        <li>
            <a href="/Domov/PregledVse">Pregled</a>
        </li>
    </ul>
    
</nav>

<!--Tu mora biti tu, da se "slot" zamenja z dejanskim contentom-->
<slot></slot>


<style>
    nav {
  background-color: #333;
  color: #fff;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

nav li {
  margin: 0;
}

nav a {
  display: block;
  padding: 1em;
  color: #fff;
  text-decoration: none;
}

nav a:hover {
  background-color: #555;
}
</style>