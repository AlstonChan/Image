export const noSemiColons = (sty: string): boolean => {
  if (sty.includes(";")) {
    const errorMsg =
      "Warning: Style property values shouldn't contain a semicolon.";
    console.error(errorMsg);
    return false;
  }
  return true;
};
