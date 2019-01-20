<template>
  <header>
    <div style="flex: 1;">
      <md-avatar class="md-avatar-icon md-primary">
        <md-icon>person</md-icon>
      </md-avatar>
    </div>
    <md-button class="md-primary">Logout</md-button>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  padding: var(--spacing-large);
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
