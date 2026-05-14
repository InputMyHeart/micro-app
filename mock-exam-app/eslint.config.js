import js from '@eslint/js'
import globals from 'globals'
import vue from 'eslint-plugin-vue'

export default [
  js.configs.recommended,
  {
    ignores: ['dist/**', 'node_modules/**']
  },
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-var': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'prefer-template': 'error',
      'prefer-arrow-callback': 'error',
      'object-shorthand': ['error', 'always'],
      'no-duplicate-imports': 'error',
      'no-useless-return': 'error',
      'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state', 'acc', 'e'] }],
      'no-shadow': ['error', { allow: ['state', 'e', 'err', 'error', 'resolve', 'reject'] }],
      'no-nested-ternary': 'warn',
      'no-unneeded-ternary': 'error',
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'curly': ['error', 'multi-line'],
      'default-case': 'error',
      'no-fallthrough': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-extend-native': 'error',
      'no-useless-concat': 'error',
      'no-template-curly-in-string': 'error',
      'no-self-compare': 'error',
      'no-throw-literal': 'error',
      'no-unreachable': 'error',
      'no-unsafe-negation': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-constant-condition': ['warn', { checkLoops: false }],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message: 'for..in 会遍历原型链，建议使用 Object.keys() 或 for..of'
        }
      ],
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'error',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-prop-types': 'error',
      'vue/no-mutating-props': 'error',
      'vue/no-side-effects-in-computed-properties': 'error',
      'vue/no-async-in-computed-properties': 'error',
      'vue/no-computed-properties-in-data': 'error',
      'vue/no-dupe-keys': 'error',
      'vue/no-duplicate-attributes': 'error',
      'vue/no-parsing-error': 'error',
      'vue/no-reserved-keys': 'error',
      'vue/no-shared-component-data': 'error',
      'vue/no-template-key': 'error',
      'vue/no-textarea-mustache': 'error',
      'vue/no-unused-components': ['warn', { ignoreWhenBindingPresent: true }],
      'vue/require-v-for-key': 'error',
      'vue/no-use-v-if-with-v-for': 'error',
      'vue/return-in-computed-property': 'error',
      'vue/use-v-on-exact': 'error',
      'vue/valid-template-root': 'error',
      'vue/valid-v-if': 'error',
      'vue/valid-v-for': 'error',
      'vue/valid-v-model': 'error',
      'vue/valid-v-on': 'error',
      'vue/html-self-closing': ['error', {
        html: { void: 'always', normal: 'always', component: 'always' }
      }],
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-indent': ['error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }],
      'vue/first-attribute-linebreak': ['error', { singleline: 'ignore', multiline: 'below' }],
      'vue/order-in-components': ['error', {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          'layout',
          'middleware',
          'directives',
          'filters',
          'components',
          'mixins',
          'inheritAttrs',
          'model',
          'props',
          'emits',
          'setup',
          'data',
          'computed',
          'watch',
          'beforeCreate',
          'created',
          'beforeMount',
          'mounted',
          'beforeUpdate',
          'updated',
          'activated',
          'deactivated',
          'beforeDestroy',
          'destroyed',
          'beforeUnmount',
          'unmounted',
          'methods',
          'template',
          'render'
        ]
      }]
    }
  }
]