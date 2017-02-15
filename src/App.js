import { h, Component } from 'preact'

import styles from './App.css'
import letConst from './let-const'
import asyncAwait from './async-await'
import classBindMethods from './class-bind-methods'
import classGetSet from './class-get-set'
import classInheritance from './class-inheritance'
import classStatic from './class-static'
import klass from './klass'
import computedProp from './computed-prop'
import deconstructArrays from './deconstruct-arrays'
import deconstruct from './deconstruct'
import fatArrow from './fat-arrow'
import find from './find'
import funcDefaults from './func-defaults'
import includes from './includes'
import methodProps from './method-props'
import objectAssign from './object-assign'
import propertyShorthand from './property-shorthand'
import spreadRest from './spread-rest'
import stringInterpolation from './string-interpolation'

export default class App extends Component {

  render () {
    return (
      <div className={ styles.container }>
        <a className={ styles.initFunc } onClick={ () => this.execute(stringInterpolation) }>String Interpolation</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(letConst) }>Let Const</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(includes) }>Includes</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(fatArrow) }>Fat Arrow</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(find) }>Find</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(computedProp) }>Computed Prop</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(methodProps) }>Method Props</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(deconstruct) }>Deconstruct</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(deconstructArrays) }>Deconstruct Arrays</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(spreadRest) }>Spread Rest</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(propertyShorthand) }>Property Shorthand</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(objectAssign) }>Object Assign</a>

        <a className={ styles.initFunc } onClick={ () => this.execute(funcDefaults) }>Func Defaults</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(asyncAwait) }>Async Await</a>

        <a className={ styles.initFunc } onClick={ () => this.execute(klass) }>Class</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(classInheritance) }>Class Inheritance</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(classStatic) }>Class Static</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(classBindMethods) }>Class bind methods</a>
        <a className={ styles.initFunc } onClick={ () => this.execute(classGetSet) }>Class Get Set</a>
      </div>
    )
  }

  execute (func) {
    // TODO :: render code to screen
    func()
  }

}
