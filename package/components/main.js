export default {
  name: "OperationVessel",
  props: {
    boundary: {
      type: Number,
      default: 3,
    },
    moreTitle: {
      type: String,
      default: "more",
    },
    moreIconVisible: {
      type: Boolean,
      default: false,
    },
    moreIcon: {
      type: String,
      default: "el-icon-arrow-down", // only icons for Element-UI are supported
    },
    dropdownAttributes: {
      type: Object,
      default: undefined,
    },
    dropdownMenuClass: {
      type: String,
      default: "",
    },
  },
  methods: {
    getFilterNodes() {
      return (
        this.$slots.default?.filter((node) => {
          const directives = node.data?.directives;
          const vShow = directives?.find((item) => item.name === "show");
          // The node is not displayed when the context is undefined or the v-show directive is false
          if (node.context === undefined || (vShow && vShow.value === false))
            return false;

          // Determine whether to execute the global filtering method
          if (this.$OPEARATION_VESSEL_FILTER)
            return this.$OPEARATION_VESSEL_FILTER(node, directives);

          return true;
        }) ?? []
      );
    },
    createNormalNodes(nodes, divider) {
      const normalNodes = [];

      nodes.forEach((node, index) => {
        index !== 0 && normalNodes.push(divider);
        normalNodes.push(node);
      });

      return normalNodes;
    },
  },
  render(h) {
    const filterNodes = this.getFilterNodes();
    const filterNodeNum = filterNodes.length;
    const divider = this.$slots.divider ?? <el-divider direction="vertical" />;

    if (filterNodeNum === 0) {
      return;
    } else {
      const result = [];
      // Determines whether the number of nodes is less than or equal to the boundary value, or the boundary value is less than 2
      if (filterNodeNum <= this.boundary || this.boundary < 2) {
        const normalNodes = this.createNormalNodes(filterNodes, divider);
        result.push(...normalNodes);
      } else {
        const normalNodes = this.createNormalNodes(
          filterNodes.slice(0, this.boundary - 1),
          divider
        );
        result.push(...normalNodes);

        // Identify the icon to the right of the more button
        const moreBtnIcon = this.moreIconVisible ? (
          <i
            class={`
              ${this.moreIcon} 
              ${this.moreTitle ? "el-icon--right" : undefined}`}
          />
        ) : null;
        // Determine the style of more buttons
        const moreBtn = this.$slots.moreBtn ?? (
          <el-link type="primary">
            {this.moreTitle}
            {moreBtnIcon}
          </el-link>
        );

        const moreNodes = filterNodes
          .slice(this.boundary - 1)
          .reduce((result, moreNode) => {
            // Synchronous disabled
            const disabled = moreNode.componentOptions?.propsData?.disabled;
            result.push(
              <el-dropdown-item disabled={disabled}>
                {moreNode}
              </el-dropdown-item>
            );
            return result;
          }, []);

        result.push(
          divider,
          <el-dropdown props={this.dropdownAttributes}>
            {moreBtn}
            <el-dropdown-menu
              slot="dropdown"
              class={`${this.dropdownMenuClass} operation-vessel__dropdown`}
            >
              {moreNodes}
            </el-dropdown-menu>
          </el-dropdown>
        );
      }

      return <div class="operation-vessel">{result}</div>;
    }
  },
};
