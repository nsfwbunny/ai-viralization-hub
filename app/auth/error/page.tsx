export default function AuthErrorPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Erro de Login</h1>
      <p>Ocorreu um problema ao fazer login.<br />
         Tente novamente ou use outra conta.</p>
      <a href="/auth/login">Voltar para login</a>
    </div>
  );
}
