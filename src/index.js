import OperationVessel from "../package/index.js";

const install = function (Vue) {
  Vue.component(OperationVessel.name, OperationVessel);
};

export default { install };
