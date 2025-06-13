const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const SUPABASE_URL = 'https://tfvbnfpwndkbrfbwuwei.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmdmJuZnB3bmRrYnJmYnd1d2VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMDE2MDQsImV4cCI6MjA2NDY3NzYwNH0.KbPIM3U1Yvu-wBu9zykh4MUuNvI9kO8fHqrXeVm3l80'; 
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

app.post('/clientes', async (req, res) => {
    const { cedula, apellidos, nombres, telefono, email } = req.body;
    if (!cedula || !apellidos || !nombres || !telefono || !email) {
        return res.status(400).json({ error: 'Faltan datos' });
    }
    // Inserta en la tabla 'clientes'
    const { data, error } = await supabase
        .from('clientes')
        .insert([{ cedula, apellidos, nombres, telefono, email }]);
    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json({ message: 'Cliente registrado correctamente', data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en puerto ${PORT}`);
});
