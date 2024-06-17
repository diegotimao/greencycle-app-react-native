export const ValidateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const formartCPF = (cpf: string) => {
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length <= 11) {
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }
  return cpf;
};

export const validateName = (name: string) => {
  return name.length >= 5;
};

export const validateCPF = (cpf: string) => {
  return cpf.length === 14;
};