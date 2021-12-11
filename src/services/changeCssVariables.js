const changeCssVariables = (name) => {
  const root = document.querySelector(':root');
  const cssVariables = ['header', 'bgimage'];

  cssVariables.forEach((el) => {
    root.style.setProperty(
      `--theme-default-${el}`,
      `var(--theme-${name}-${el})`
    );
  });
};

export default changeCssVariables;
