<script setup lang="ts">
function formSubmit(e: any) {
  e.preventDefault();
}
</script>
<template>
  <form
    @submit="formSubmit"
    class="border-2 rounded bg-clightgray p-3 border-cpurple w-80"
  >
    <div>
      <label class="block mb-2.5 text-cblack text-lg font-medium" for="userName"
        >اسم المرسل:</label
      >
      <input class="bg-cwhite px-1" id="userName" type="text" />
    </div>
    <div>
      <label
        class="block my-2.5 text-cblack text-lg font-medium"
        for="userEmail"
        >البريد:</label
      >
      <input class="bg-cwhite px-1" id="userEmail" type="email" />
    </div>
    <div>
      <label class="block my-2.5 text-cblack text-lg font-medium" for="message"
        >الرسالة:</label
      >
      <textarea
        class="form-control bg-cwhite px-1 resize-none w-full h-40 px-3 py-1.5 bg-cwhite rounded"
        id="message"
        type="text"
      ></textarea>
    </div>
    <button
      type="submit"
      class="block border-none mr-auto w-24 rounded bg-cdarkgray text-cblack font-medium text-lg p-2"
    >
      إرسال
    </button>
  </form>
</template>
