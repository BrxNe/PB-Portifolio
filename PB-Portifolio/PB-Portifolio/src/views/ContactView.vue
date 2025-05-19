<template>
  <div class="p-4 max-w-3xl mx-auto bg-black text-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold mb-4 text-green-400">Contato</h1>

    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col space-y-4 border border-green-600 p-4 rounded bg-gray-900"
    >
      <div>
        <label for="nome" class="block mb-1 text-green-300">Nome:</label>
        <input
          id="nome"
          v-model="form.nome"
          type="text"
          required
          class="w-full p-2 rounded bg-black border border-green-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div>
        <label for="email" class="block mb-1 text-green-300">Email:</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full p-2 rounded bg-black border border-green-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div>
        <label for="mensagem" class="block mb-1 text-green-300">Mensagem:</label>
        <textarea
          id="mensagem"
          v-model="form.mensagem"
          rows="4"
          required
          class="w-full p-2 rounded bg-black border border-green-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
      >
        Enviar
      </button>
    </form>

    <div class="mt-6">
      <p class="font-semibold mb-2 text-green-400">Redes sociais:</p>
      <ul class="list-disc list-inside space-y-1 text-green-200">
        <li>
          <a
            href="https://www.linkedin.com/in/pedrobrene"
            class="hover:underline hover:text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pedrobrene"
            class="hover:underline hover:text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/pedrobrene_"
            class="hover:underline hover:text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nome: '',
  email: '',
  mensagem: '',
})

function handleSubmit() {
  console.log('Dados do formulário:', form)
  alert('Mensagem enviada com sucesso!')
  form.nome = ''
  form.email = ''
  form.mensagem = ''
}
</script>
