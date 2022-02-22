import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>entradas</p>
        </header>
        <strong>R$1000</strong>
      </div>

      <div>
        <header>
          <p>saidas</p>
        </header>
        <strong> - R$5000</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
        </header>
        <strong>R$1000</strong>
      </div>
    </Container>
  );
}
