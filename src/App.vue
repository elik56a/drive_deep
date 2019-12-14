<template>
    <div>
     <v-app light >

         <v-navigation-drawer
                 class="navigation-drawer-custom"
                 fixed
                 absolute
                 temporary
                 app
                 :mini-variant="miniVariant"
                 :clipped="clipped"
                 width="240"
                 :right="drawerRight"
                 v-model="drawer"
         >
             <v-layout  class="drawer--container" column >
                 <v-flex style="flex: 1" >

                     <div class="drawerTop" >

                         <v-list >
                             <v-list-item>
                                 <div class="d-inline-block pos-relative">
                                     <v-avatar
                                             :tile="tile"
                                             :size="avatarSize"
                                             color="grey lighten-4"
                                             alt="Profile Photo"
                                     >
                                         <img src="https://randomuser.me/api/portraits/men/28.jpg" />
                                     </v-avatar>

                                 </div>

                                 <v-spacer></v-spacer>

                             </v-list-item>
                             <v-list-item
                                     two-line
                             >
                                 <v-list-item-content>
                                     <v-list-item-title class="title">Daniel Ezra</v-list-item-title>
                                     <v-list-item-subtitle>danielEz@gmail.com</v-list-item-subtitle>
                                 </v-list-item-content>

                             </v-list-item>

                         </v-list>

                     </div>

                 </v-flex>

                 <v-divider></v-divider>

                 <v-list class="drawer-list-item">
                     <v-list-item
                             nav
                             link
                             v-for="(item, i) in drawerItems"
                             :key="i"
                             :to="{path: item.link || '/page' + (i+1)}"
                     >

                         <v-list-item-icon>
                             <v-icon >{{item.icon}}</v-icon>
                         </v-list-item-icon>
                         <v-list-item-title>{{item.title}}</v-list-item-title>
                     </v-list-item
                     >
                 </v-list>
             </v-layout>

         </v-navigation-drawer>
      <div style="height: 50px">
      <v-toolbar
                  color="#34b5ae"
                  dark
                 fixed
                 app
                 :clipped-left="clipped"
                 class="toolbar--app-main">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mx-2"></v-app-bar-nav-icon>

                        <v-toolbar-title>Deep Drive</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-divider
                  vertical
                  light
          ></v-divider>
          <div class="mt-5">
          <v-text-field
                  class="mx-3"
                  flat
                  label="Search"
                  prepend-inner-icon="search"
                  solo-inverted
          ></v-text-field>
          </div>

                        <v-btn  class="mx-2" icon>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>

                        <v-btn class="mx-2" icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>


      </v-toolbar>

      </div>

         <v-fade-transition mode="out-in">
             <router-view></router-view>
         </v-fade-transition>


  </v-app>
    </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
      drawer: false,
      clipped: true,
      fixed: false,
      tile: false,
      avatarSize: '80px',
      miniVariant: false,
      right: true,
      drawerRight: false,
      drawerItems: [
          { icon: 'dashboard', title: 'Home', link: '/' },
          { icon: 'chat', title: 'Chats', link: '/about' },
          { icon: 'attachment', title: 'My Files', link: '/reports' },
          { icon: 'email', title: 'Messages', link: '/messages' },
          { icon: 'settings', title: 'Settings', link: '/settings' },
      ]

  }),
  created() {
    this.$vuetify.rtl = this.$vuetify.lang.current === 'he';
  }
};
</script>

<style>
    .drawer-app {
        background: #3f51b5;
    }
  .loading-progress {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
  }
  .toolbar.cardHeader {
    background: #fff;
    border-bottom: 1px solid #ccc;
    /*justify-content: center;*/
  }
  .cardHeaderTitle {
    color: #3f51b5;
  }
  .cardBody {
    min-height: 365px;
    max-height: 365px;
    overflow: auto;
  }
  .theme--light .navigation-drawer-custom {
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    max-height: calc(100% - 55px) !important;
    margin-top: 55px !important;

  }
  .theme--light .v-toolbar, .application .theme--light.v-toolbar {
    background-color: transparent;
    color: rgba(0,0,0,0.87);
    border-bottom: 1px solid #eee;
  }
  .toolbar--app-main  {
      padding: 0;
      height: 54px !important;
  }
  .drawerTop {
    padding-top: 10px;
    background: #fff;
    text-align: center;
    justify-content: center;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 15px;
  }
  .textMuted {
    color: #aaa;
    lineHeight: 1.8;
  }
  .text--mute {
    opacity: .5;
  }
  .v-navigation-drawer .drawer-list {
    background-color: #fff;
    padding-bottom: 0;
  }
  .drawer-list-wrapper {
    max-height: calc(100% - 260px) !important;
    overflow: auto;
  }
  .drawer-list > div {
    border-bottom: 1px solid #eaeaea;
  }
  .drawer-list-item > * {
    margin-right: 0 !important;
  }
  .drawerBottom {
    background: #eaeaea;
  }
  .drawerBottom .list__tile {
    height: auto;
  }
  .list__tile__action {
    min-width: 45px;
  }
  .cardBody .c-pane-container {
    width: 100%;
    border: none !important;
    background-color:  transparent !important;
  }

  .cardBody .c-week {
    padding: 5px !important;
  }

  .cardBody .c-day-content {
    font-size: 1.1rem !important;
    width: 2.1rem !important;
    height: 2.1rem !important;
  }
  .cardBody .c-day-background {
    width: 2.1rem !important;
    height: 2.1rem !important;
  }
  .cardBody .c-header {
    padding: 0 10px 20px !important;
  }
  .application.theme--light {
    background-color: #eee;
  }
  .padding-ver-0 {
    padding-top: 0;
    padding-bottom: 0;
  }
  .strong {
    font-weight: bold;
  }
  .small {
    font-size: .7em;
  }

  .toolbar--card-items {
    align-items: center;
    justify-content: center;
  }
  .toolbar--app-main .v-toolbar__content {
    padding: 0;
    height: 54px !important;
  }
  .toolbar--toggle {
    width: 240px;
  }
  .border--right-1 {
    border-right: 1px solid #000;
  }
  .toolbar--card-items .toolbar--action {
    height: 28px !important;
    margin: 0 3px !important;
  }
  .full-width {
    width: 100%;
  }
  .toolbar--app-main .v-input__slot {
    margin-bottom: 0;
  }
  .v-badge--small span.v-badge__badge.orange {
    height: 16px;
    width: 16px;
    font-size: 12px;
    font-weight: 600;
    top: -6px;
    right: -6px;
  }
  .flex-d-column {
    flex-direction: column;
  }
  .p-0 {
    padding: 0 !important;
  }
  .toolbar--app-main .v-text-field.v-text-field--solo .v-input__control {
    min-height: auto;
  }
  .v-toolbar__content .v-text-field.v-text-field--solo .v-input__control {
    min-height: auto;
  }
  /*.toolbar--app-main .v-btn {*/
  /*min-width: 75px;*/
  /*height: auto;*/
  /*}*/
  .toolbar--app-main .v-toolbar__title {
    font-size: 16px;
    color: #fff;
  }
  .status-badge {
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 2px solid #fff;
    background: #8bc34a;
  }
  .status-badge.offline {
    background: #ff4341;
  }
  .pos-relative {
    position: relative;
  }
  .v-list__tile-slim .v-list__tile {
    height: auto;
  }
  .v-list__tile__action {
    min-width: 35px;
  }
  .text--underline {
    text-decoration: underline;
  }


  .toolbar--inner .v-toolbar__content {
    background: #fafafa;
    padding: 0;
    height: 54px !important;
  }
  .minheight-36.v-text-field.v-text-field--solo .v-input__control {
    min-height: 36px;
  }
  .minheight-36.v-text-field.v-text-field--solo .v-input__control .v-input__slot {
    margin-bottom: 0;
  }
  .hide--v-text-field__details .v-text-field__details {
    display: none !important;
  }
  .background-transparent {
    background: transparent !important;
  }
  /*body > #voximplantlocalvideo {*/
  /*display: none !important;*/
  /*}*/
  video#voximplantlocalvideo {
    width: 160px;
    position: absolute;
    z-index: 1000;
    bottom: 0;
    right: 0px;
    height: 125px;
  }
  .body-2 label {
    font-size: inherit !important;
  }
  .v-menu__content .v-tabs__container {
    height: auto;
  }


  .wawy-calendar-card .v-date-picker-table__event {
    transform: translate(-16px, -7px);
    height: 32px;
    width: 32px;
    z-index: -1;
  }
  .wawy-calendar-card .v-date-picker-table--date td {
    height: 47px;
  }
  .wawy-calendar-card .v-date-picker-table--date .v-btn--floating .v-btn__content {
    font-size: 16px;
  }
  .wawy-calendar-card .v-date-picker-table {
    height: auto !important;
  }
  .call-container {
    background: rgba(255, 193, 7, 0.8);
    color: #fff;
    position: absolute;z-index: 50; top: 0; margin-top: -9px;
  }
  .call-container.active-call {
    background: rgba(139, 195, 74, 0.85);
  }
  .tpl-loop {
    position: relative;
  }
  .tpl-loop.wrap.even {
    background: #fdfdfd;
  }
  .tpl-loop.wrap.odd {
    background: #f7f7f7;
  }
  .tpl-loop .tpl-remove-item {
    position: absolute;
    z-index: 1;
    top: 5px;
    right: 5px;
  }
  #voximplant_container_two {
    height: 0;
    overflow: hidden;
  }

  .section--disabled:before {
    content: '';
    z-index: 2;
    display: block;
    background: rgba(255, 255, 255, 0.2);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .section--disabled {
    opacity: 0.5;
    position: relative;
  }
  span.bubble-badge {
    background: #9fa7db;
    color: #fff;
    min-width: 15px;
    height: 15px;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    font-size: 11px;
    vertical-align: middle;
    margin: 0 4px;
    line-height: 15px;
    padding: 0 2px;
  }

  .v-input.select--lean {
    border: 1px solid #c2c2c2;
    border-radius: 3px;
  }
  .v-input.select--lean.v-text-field.v-text-field--solo .v-input__control {
    min-height: auto;
  }
  .v-input.select--lean input[type="text"], .v-input.select--lean label.v-label, .v-input.select--lean .v-select__selection {
    font-size: 14px;
  }
  .v-input--selection-controls.radio-group--lean .v-input__slot {
    margin-bottom: 0;
  }
  .v-input.radio-group--lean .v-label {
    font-size: 14px;
  }


  @import url('https://fonts.googleapis.com/css?family=Rubik');
  .application, .application .title {
    font-family: 'Rubik', sans-serif !important;
  }
  .v-list__tile__content, .v-list__tile__title {
    text-align: justify;
  }
</style>
