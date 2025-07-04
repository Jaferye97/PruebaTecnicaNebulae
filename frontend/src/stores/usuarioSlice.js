import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usuario: null,
  autenticado: false,
};

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    asignarUsuario(state, action) {
      state.usuario = action.payload;
      state.autenticado = true;
    },
    logout(state) {
      state.usuario = null;
      state.autenticado = false;
    },
  },
});

export const { asignarUsuario, logout } = usuarioSlice.actions;
export default usuarioSlice.reducer;
