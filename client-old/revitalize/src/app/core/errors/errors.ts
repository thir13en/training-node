export const ErrorCodes = {
  e000: '000 - The number of parameters in an url does not match the parameters sent',
};

export const errorHandler: (test: boolean, err: string) => void = (condition: boolean, err: string): void => {
  if (condition) {
    throw new Error(err);
  }
};
