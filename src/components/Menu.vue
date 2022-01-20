<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
        <ul class="nav flex-column">
            <li class="nav-item">
                <router-link to="/Dashboard" class="nav-link active" active-class="active">
                    Dashboard
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/Categories" class="nav-link active" active-class="active">
                    Categories
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/Cars" class="nav-link active" active-class="active">
                    Cars
                </router-link>
            </li>
        </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>