'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [form, setForm] = useState({ email: '', name: '', password: '' });
  const [msg, setMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg('...');
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      setMsg('Conta criada! Já pode fazer login.');
    } else {
      setMsg(data.error || 'Erro ao cadastrar.');
    }
  }

  return (
    <div style={{ maxWidth: 320, margin: '100px auto', textAlign: 'center' }}>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <input
          type="text"
          placeholder="Nome"
          required
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          value={form.password}
          onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <p>{msg}</p>
      <a href="/auth/login">Já tem conta? Entrar</a>
    </div>
  );
}
