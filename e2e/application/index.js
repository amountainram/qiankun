const render = ({container}) => {
  console.log(container);
  return Promise.resolve();
};

(global => {
  global['application'] = {
    bootstrap: () => Promise.resolve(),
    mount: (props) => {
      document.createTreeWalker(document);
      return render(props);
    },
    unmount: () => Promise.resolve()
  };
})(window);
