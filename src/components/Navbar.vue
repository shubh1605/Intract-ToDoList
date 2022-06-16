<template>
  <ul class="menu">
    <div
      class="menu-indicator"
      :style="{ left: positionToMove, width: sliderWidth }"
    ></div>
     <div v-if = "isLoggedIn">
        <li
          class="menu-item"
          v-for="link in loggedInLinks"
          :key="link.id"
          @click="sliderIndicator(link.id)"
          :ref="'menu-item_' + link.id"
        >
          <a
            href="#"
            class="menu-link"
            :class="link.id === selectedIndex ? 'active' : null"
          >
            <span>{{ link.text }}</span>
          </a>
        </li>
     </div>
     <div v-else>
        <li
          class="menu-item"
          v-for="link in notLoggedInLinks"
          :key="link.id"
          @click="sliderIndicator(link.id)"
          :ref="'menu-item_' + link.id"
        >
          <a
            href="#"
            class="menu-link"
            :class="link.id === selectedIndex ? 'active' : null"
          >
            <span>{{ link.text }}</span>
          </a>
        </li>

     </div>
    
  </ul>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['isLoggedIn'],
  data() {
    return {
      
      sliderPosition: 0,
      selectedElementWidth: 0,
      selectedIndex: 1,
      notLoggedInLinks: [
        {
          id: 1,
          text: "Register",
        },
        {
          id: 2,
          text: "Login",
        },
      ],
      loggedInLinks: [
        {
          id: 1,
          text: "Username",
        },
        {
          id: 2,
          text: "Log Out",
        },
      ],
    };
  },
  methods: {
    sliderIndicator(id) {
      let el = this.$refs[`menu-item_${id}`][0];
      this.sliderPosition = el.offsetLeft;
      this.selectedElementWidth = el.offsetWidth;
      this.selectedIndex = id;
      this.$emit("setParentComponentDetails", this.selectedIndex);
    },
  },
  computed: {
    positionToMove() {
      return this.sliderPosition + "px";
    },
    sliderWidth() {
      return this.selectedElementWidth + "px";
    },
  },
};
</script>

<style>
:root {
  --active-color: black;
  --link-text-color: #f1faee;
  --menu-background-color: black;
  --active-background-color: #eee;
}
/* ul */
.menu {
  padding: 0;
  margin: 0;
  position: fixed;
  top:0; 
  left: 0;
  width: 100%;
  background-color: var(--menu-background-color);
  display: inline-flex;
  border-radius: 4px;
  list-style-type: none;
  overflow: hidden;
}
/* li */
.menu-item {
  display: inline-flex;
}

/* a */
.menu-link {
  padding: 0.75rem 1rem;
  display: inline-flex;
  align-items: center;
  color: var(--link-text-color);
  text-decoration: none;
}

/* .menu-link:hover, */
.menu-link.active {
  color: var(--active-color);
  background-color: var(--active-background-color);
}

/* icon */
.menu-icon {
  height: 1.5rem;
  width: 1.5rem;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  margin-right: 0.2rem;
}
/* slider */
.menu-indicator {
  position: absolute;
  height: 0.25rem;
  /* background-color: var(--active-color); */
  bottom: 0;
  left: 0;
  margin: auto;
  width: 3rem;
  transition: all ease 0.5s;
}
</style>