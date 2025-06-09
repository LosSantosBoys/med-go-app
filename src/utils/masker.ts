export class Masker {
  static cpf(cpf: string): string {
    const digits = cpf.replace(/\D/g, "").slice(0, 11)
    return digits
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1-$2")
  }
}