<template>
  <div class="forum-section">
    <v-sheet color="sheetbg" >
      <!-- <v-icon size="28" color="#a5a5a5">{{ icon }}</v-icon> -->
      <!-- <v-img src="../../../public/ex_1.png"  width="250" aspect-ratio="5"></v-img> -->
      <v-img src="../../../public/user.png" aspect-ratio="5"></v-img>

      <div class="cat-subcats">
        <!-- <span>{{ section_name }}</span> -->
        <span>Guardians of Ukaine</span>
        <div class="discord-twitter">
          <span class="discord-users"><v-icon>fa-brands fa-discord</v-icon>4.9K</span>
          <span class="twitter-users"><v-icon>fa-brands fa-twitter</v-icon>3.3K</span>
        </div>

        <div class="subcats">
          <span v-for="section in section_subsections" v-bind:key="section"
            ><v-icon>fa-turn-up</v-icon> {{ section }}</span
          >
        </div>
      </div>

      <div class="recent-post justify-sm-start mt-sm-4 mt-4 justify-lg-end border border-success">
        <div class="d-flex flex-column">
          <span class="text-trunc">{{ first_post.name }}</span>
          <span>{{ first_post.when }} ago</span>
        </div>
      </div>

      <div class="recent-post justify-sm-start mt-sm-4 mt-4 justify-lg-end">
        <div class="d-flex flex-column">
          <span class="text-trunc">{{ middle_post.name }}</span>
          <span>{{ middle_post.when }} ago</span>
        </div>
      </div>


      <div class="recent-post justify-sm-start mt-sm-4 mt-4 justify-lg-end">
        <div class="d-flex flex-column">
          <span class="text-trunc">{{ last_post.name }}</span>
          <span>{{ last_post.when }} ago</span>
        </div>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "ForumSection",

  props: {
    icon: String,
    section_name: String,
    section_subsections: Array,
    last_post: Object,
    middle_post: Object,
    first_post: Object,
  },
};
</script>

<style lang="scss" scoped>
.forum-section {

  &:last-of-type > .v-sheet {
    border-radius: 8px;
    height: 100px;
    padding: 0px 30px;
    border: 0.5px solid #3d3c3c !important;
  }

  & > .v-sheet {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    .recent-post {
      flex-grow: 1;
      display: flex;

      & > div {
        padding: 0px 30px;
        // width: 150px;
        // background: var(--v-sheetbglighter-base) !important;
        align-items: center;
        cursor: pointer;

        span:first-of-type {
          font-family: "Source Sans Pro";
          font-size: 15px;
          color: #909090;
          font-weight: 600;
        }

        span:last-of-type {
          font-family: "Source Sans Pro";
          font-size: 13px;
          color: white;
        }
      }
    }

    & > .v-icon {
      padding: 0 10px;
      margin-right: 20px;
    }

    .cat-subcats {
      display: flex;
      flex-direction: column;
      flex-grow: 3;
      position: relative;
      top: 3px;

      .subcats {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 10px;
        max-width: 70%;

        span {
          font-size: 17px;
          font-weight: 600;
          font-family: Source Sans Pro;
          color: #d5d5d5;
          min-width: 50%;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;

          cursor: pointer;
          transition: color 0.3s;

          &:hover {
            color: white;
          }

          i {
            transform: rotate(90deg);
            margin-right: 10px;
            font-size: 17px;
            color: #868686;
          }
        }
      }

      & > span {
        font-size: 15px;
        font-weight: 600;
        font-family: Source Sans Pro;
        color: #d5d5d5;
        cursor: pointer;
        transition: color 0.3s;
        position: absolute;

        &:hover {
          color: white;
        }
      }
    }
  }
}

.v-image {
  width: 10px;
  height: 60px;
  border-radius: 5%;
  margin-right: 10px;
}

.discord-twitter {
  margin-top: 30px;
}

.discord-users {
    border: 0.5px solid #3d3c3c !important;
    border-radius: 10%;
    font-size: 15px;
    font-weight: 200;
    font-family: Source Sans Pro;
    color: white;
    padding: 4px;
    margin-right: 10px;
}

.discord-users > .v-icon {
  font-size: 10px;
  padding-right: 10px;
}

.twitter-users {
    border: 0.5px solid #3d3c3c !important;
    border-radius: 10%;
    font-size: 15px;
    font-weight: 200;
    font-family: Source Sans Pro;
    color: white;
    padding: 3px;
}

.twitter-users > .v-icon {
  font-size: 10px;
  padding-right: 10px;
}


@media (max-width: 576px) {
  .forum-section {
    &:last-of-type > .v-sheet {
      padding: 10px;
      height: 200px;
    }
    .cat-subcats {
      margin: 0px 20px;
    }

    & > .v-sheet {
      .recent-post {
        & > div {
          padding: 0px 15px;
        }
      }
    }
  }
  .v-image {
    width: 60px;
  }

}
</style>