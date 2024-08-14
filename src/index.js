import OperationVessel from "../package/index.js";

function formatProps(component, attrs) {
  const rawProps = component.props;
  const rawPropKeys = Object.keys(rawProps);
  const attrKeys = Object.keys(attrs);

  attrKeys.forEach((attrKey) => {
    if (rawPropKeys.includes(attrKey)) {
      rawProps[attrKey].default = attrs[attrKey];
    }
  });
}

const install = function (Vue, opts) {
  const { $ATTRIBUTES, $FILTER } = opts ?? {};

  $ATTRIBUTES && formatProps(OperationVessel, $ATTRIBUTES);

  Vue.component(OperationVessel.name, OperationVessel);

  Vue.prototype.$OPEARATION_VESSEL_FILTER = $FILTER;
};

// Automatically register this component for direct use in the browser
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default { install };
