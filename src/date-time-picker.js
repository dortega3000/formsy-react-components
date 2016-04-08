/*jshint node:true */
/*jshint node:true */

'use strict';

var React = require('react');
var Formsy = require('formsy-react');
var DateTimePicker = require('react-bootstrap-datetimepicker');

var ComponentMixin = require('./mixins/component');
var Row = require('./row');
var DateTimePicker = require('./row');
var Textarea = React.createClass({

    mixins: [Formsy.Mixin, ComponentMixin],

    changeValue: function(value) {
        this.setValue(value);
        this.props.onChange(this.props.name, value);
    },

    renderElement: function() {
        return (
            <DateTimePicker
                ref="element"
                {...this.props}
                id={this.getId()}
                dateTime={this.getValue()}
                onChange={this.changeValue}
                disabled={this.isFormDisabled() || this.props.disabled}
            ></DateTimePicker>
        );
    },

    render: function() {

        if (this.getLayout() === 'elementOnly') {
            return this.renderElement();
        }

        return (
            <Row
                {...this.getRowProperties()}
                htmlFor={this.getId()}
            >
                {this.renderElement()}
                {this.renderHelp()}
                {this.renderErrorMessage()}
            </Row>
        );
    }
});

module.exports = Textarea;
