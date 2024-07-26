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

export default { install };
