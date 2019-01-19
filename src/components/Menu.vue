<template>
  <div class="menu">
    <div class="image" :style="style"></div>
    <div class="menu-actions">
      <div class="title">{{menu.title}}</div>
      <div class="description">{{menu.description}}</div>
      <div class="star">
        <md-button class="md-icon-button" @click.stop="$emit('toggleStar', menu)">
          <font-awesome-icon :style="{color: starIconColor}" icon="star"/>
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: Object
  },
  data() {
    return {
      style: {
        background: this.menu.backgroundColor,
        backgroundImage: `url(${this.menu.image})`,
        backgroundSize: "cover"
      }
    };
  },
  computed: {
    starIconColor() {
      return this.menu.star ? "#FFC400" : "#fff";
    }
  },
  methods: {
    toggleStar() {
      this.menu.star = !this.menu.star;
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  cursor: pointer;
  position: relative;

  .image {
    height: 300px;
    width: 300px;
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }

  .menu-actions {
    background: rgba(38, 50, 56, 0.7);
    bottom: 0;
    color: #fff;
    position: absolute;
    width: 100%;

    .title {
      font-size: 18px;
      margin: 10px;
    }

    .description {
      font-size: 12px;
      margin: 10px;
    }

    .star {
      text-align: right;
      margin: 10px;
    }
  }

  &:hover {
    .image {
      opacity: 1;
      outline: 4px solid #40c4ff;
      outline-offset: 2px;
    }
  }
}
</style>
