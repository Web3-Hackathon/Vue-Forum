import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Auth/Login.vue"),
    meta: {
      breadcrumb(route) {
        return [
          {
            text: "HOME",
          },
        ];
      },
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Auth/Signup.vue"),
    meta: {
      breadcrumb(route) {
        return [
          {
            text: "HOME",
          },
        ];
      },
    },
  },

  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "forum" */ "../views/Forum.vue"),
    meta: {
      breadcrumb(route) {
        return [
          // {
          //   text: "HOME",
          //   to: { name: "home" },
          // },
          {
            text: "Featured >>",
          },
        ];
      },
    },
  },

  {
    path: "/edit/profile",
    name: "edit_profile",
    redirect: {
      name: "content_view",
      params: { route: "personal-information" },
    },
    component: () =>
      import(
        /* webpackChunkName: "edit_profile" */ "../views/UserProfile/EditProfile.vue"
      ),
    meta: {
      breadcrumb(route) {
        return [
          {
            text: "HOME",
            to: { name: "home" },
          },
          {
            text: "My Profile",
            to: {
              name: "profile",
              params: { name: store.getters.user.username },
            },
          },
          {
            text: "Edit Profile",
          },
        ];
      },
    },

    children: [
      {
        name: "content_view",
        path: ":route",
        component: () =>
          import(
            /* webpackChunkName: "edit_profile" */ "../views/UserProfile/EditProfileViews/ProfileViewLoader.vue"
          ),

        meta: {
          breadcrumb(route) {
            let pageName = route.params.route.split("-").join(" ");

            return [
              {
                text: "HOME",
                to: { name: "home" },
              },
              {
                text: "My Profile",
                to: {
                  name: "profile",
                  params: { name: store.getters.user.username },
                },
              },
              {
                text: "Edit Profile",
                to: { name: "edit_profile" },
              },

              {
                text: pageName,
              },
            ];
          },
        },
      },

      {
        name: "new_message",
        path: "messages/new/:user",
        component: () =>
          import(
            /* webpackChunkName: "edit_profile" */ "../views/UserProfile/EditProfileViews/messages.vue"
          ),

        meta: {
          breadcrumb(route) {
            return [
              {
                text: "HOME",
                to: { name: "home" },
              },
              {
                text: "My Profile",
                to: {
                  name: "profile",
                  params: { name: store.getters.user.username },
                },
              },
              {
                text: "Edit Profile",
                to: { name: "edit_profile" },
              },

              {
                text: "New Message",
              },
            ];
          },
        },
      },
    ],
  },

  {
    path: "/profile/:name",
    name: "profile",
    component: () =>
      import(
        /* webpackChunkName: "profile" */ "../views/UserProfile/Profile.vue"
      ),
    meta: {
      breadcrumb(route) {
        const pageName = route.params.name;
        return [
          {
            text: "HOME",
            to: { name: "home" },
          },
          {
            text: "Profile of " + pageName,
          },
        ];
      },
    },
  },

  {
    path: "/members",
    name: "members",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/MemberList.vue"),
    meta: {
      breadcrumb(route) {
        return [
          {
            text: "HOME",
            to: { name: "home" },
          },
          {
            text: "Member List",
          },
        ];
      },
    },
  },

  {
    path: "/upgrade",
    name: "upgrade",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Upgrade.vue"),
    meta: {
      breadcrumb(route) {
        return [
          {
            text: "HOME",
            to: { name: "home" },
          },
          {
            text: "Upgrade",
          },
        ];
      },
    },
  },
  {
    path: "/new/posts",
    name: "new_posts",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/NewPosts.vue"),
    meta: {
      breadcrumb(route) {
        return [
          {
            text: "HOME",
            to: { name: "home" },
          },
          {
            text: "New Posts",
          },
        ];
      },
    },
  },
  {
    path: "/extra",
    name: "extra",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Extra.vue"),
    meta: {
      breadcrumb(route) {
        return [
          {
            text: "HOME",
            to: { name: "home" },
          },
          {
            text: "Extra",
          },
        ];
      },
    },
  },
  {
    path: "/forum/:name",
    name: "",
    component: () =>
      import(/* webpackChunkName: "forum" */ "../views/Topics.vue"),
    meta: {
      breadcrumb(route) {
        const pageName = route.params.name;
        return [
          {
            text: "HOME",
            to: { name: "home" },
          },
          {
            text: pageName,
          },
        ];
      },
    },
  },

  {
    path: "/thread/:name",
    name: "",
    component: () =>
      import(/* webpackChunkName: "forum" */ "../views/Post.vue"),
    meta: {
      breadcrumb(route) {
        const pageName = route.params.name;
        return [
          {
            text: "HOME",
            to: { name: "home" },
          },
          {
            text: "Thread Name",
            to: { name: "home" },
          },
          {
            text: pageName,
          },
        ];
      },
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
