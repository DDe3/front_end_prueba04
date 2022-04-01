<template>
  <br />
  <input type="number" v-model="id" placeholder="id" />
  <br />
  <input type="text" v-model="codigoBarras" placeholder="Codigo de Barras" />
  <br />
  <input type="text" v-model="nombre" placeholder="Nombre" />
  <br />
  <input type="text" v-model="categoria" placeholder="Categoria" />
  <br />
  <input type="number" v-model="stock" placeholder="Stock" />
  <br />
  <input type="number" v-model="precio" placeholder="Precio" />
  <br />
  <button @click="insertarProducto">Insertar</button>
  <br />
  <h1 v-if="respuesta">{{respuesta}}</h1>
</template>

<script>
export default {
  name: "Producto",

  data() {
    return {
      id: null,
      codigoBarras: null,
      nombre: null,
      categoria: null,
      stock: null,
      precio: null,

      usuario: { username: "lasalinasb", password: "123456" },
      token: null,
      respuesta : null,
    };
  },
  methods: {
    async insertarProducto() {
      if (token == null) {
        const data = axios
          .post("http://localhost:8085/api/seguridad/tokens", this.usuario)
          .then((r) => r.data);
        this.token = data;
      }
      const producto = {
        id: this.id,
        codigoBarras: this.codigoBarras,
        nombre: this.nombre,
        categoria: this.categoria,
        stock: this.stock,
        precio: this.precio,
      };

      const data = axios
        .post(`http://localhost:8081/api/productos`, producto, {
          headers: { Authorization: `${token}` },
        })
        .then((r) => r.data);
      return data;
    },
  },
};
</script>

<style>
</style>