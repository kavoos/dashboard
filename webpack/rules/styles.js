
import { arrayFilterEmpty } from '../utils/helpers'
import {
  cssLoader,
  cssLoaderItems,
  cssModulesSupportLoaderItems,
  lessLoader,
  miniCssExtractLoader,
  postCssLoader,
  resolveUrlLoader,
  sassLoaderItems
} from './useLoaderRuleItems'

// export const cssRule = {
//   test: /\.css$/,
//   use: [miniCssExtractLoader, postCssLoader, resolveUrlLoader, cssLoader]
// }

export const cssRule = {
  test: /\.css$/,
  use: [
    'style-loader',
    // {
    //   loader: MiniCssExtractPlugin.loader,
    //   options: {
    //     hmr: argv.mode === 'development'
    //   }
    // },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1
      }
    },
    'postcss-loader'
  ]
}

export const lessModulesRule = {
  test: /\.module.less$/,
  use: arrayFilterEmpty([
    ...cssModulesSupportLoaderItems,
    postCssLoader,
    resolveUrlLoader,
    lessLoader
  ])
}

export const lessRule = {
  test: /\.less$/,
  exclude: /\.module.less$/,
  use: arrayFilterEmpty([
    ...cssLoaderItems,
    postCssLoader,
    resolveUrlLoader,
    lessLoader
  ])
}

export const lessRules = [lessModulesRule, lessRule];

export const sassModulesRule = {
  test: /\.module\.s([ca])ss$/,
  use: arrayFilterEmpty([
    ...cssModulesSupportLoaderItems,
    postCssLoader,
    resolveUrlLoader,
    ...sassLoaderItems
  ])
}

export const sassRule = {
  test: /\.s([ca])ss$/,
  exclude: /\.module.scss$/,
  use: arrayFilterEmpty([
    ...cssLoaderItems,
    postCssLoader,
    resolveUrlLoader,
    ...sassLoaderItems
  ])
}

export const sassRules = [sassModulesRule, sassRule]