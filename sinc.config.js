/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  sourceDirectory: 'src',
  rules: [
    {
      match: /\.sn\.ts$/,
      plugins: [
        {
          name: '@sincronia/typescript-plugin',
          options: {
            transpile: false
          }
        },
        {
          name: '@sincronia/babel-plugin',
          options: {
            presets: ['@nuvolo/sn-ts']
          }
        }
      ]
    }
  ],
  excludes: {
    sp_rectangle_menu_item: true,
    x_nuvo_csd_task_routing_rule: true,
    x_nuvo_mobile_schema: true,
    sys_hub_flow_input: true
  },
  includes: {
    x_nuvo_mobile_widget_definition: {
      template: {
        type: 'html'
      }
    }
  },
  tableOptions: {
    catalog_script_client: {
      differentiatorField: ['cat_item', 'variable_set', 'sys_id']
    },
    catalog_ui_policy: {
      differentiatorField: ['catalog_item', 'variable_set', 'sys_id']
    },
    sys_script: {
      differentiatorField: ['collection', 'sys_id']
    },
    sys_script_client: {
      differentiatorField: ['table', 'sys_id']
    },
    sys_ui_action: {
      differentiatorField: 'sys_id'
    },
    sys_ws_operation: {
      differentiatorField: 'web_service_definition'
    },
    sysevent_script_action: {
      differentiatorField: 'event_name'
    },
    x_nuvo_eam_guided_workflow_steps: {
      differentiatorField: 'guided_workflow_recipe'
    },
    x_nuvo_mobile_nuvolo_property: {
      differentiatorField: 'context'
    },
    x_nuvo_mobile_ui_action_definition: {
      differentiatorField: 'function_name'
    },
    x_nuvo_mobile_widget_definition: {
      differentiatorField: 'application'
    }
  }
};
