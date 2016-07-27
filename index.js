var moment = require('moment'),
    _ = require('underscore'),
    async = require('async'),
    rrule = require('rrule'),

    RRule = rrule.RRule,
    RRuleSet = rrule.RRuleSet;

var frequencias = {
    'semanal': {
        freq: RRule.WEEKLY,
        interval: 1
    },

    'mensal': {
        freq: RRule.MONTHLY,
        interval: 1
    },

    'bimestral': {
        freq: RRule.MONTHLY,
        interval: 2
    },

    'trimestral': {
        freq: RRule.MONTHLY,
        interval: 3
    },

    'semestral': {
        freq: RRule.MONTHLY,
        interval: 6
    },

    'anual': {
        freq: RRule.YEARLY,
        interval: 1
    }
}

function obterIntervalo(declaracao) {
    if(declaracao.periodicidade === 'semanal') {
        return {
            1: { byweekday: RRule.MO },
            2: { byweekday: RRule.TU },
            3: { byweekday: RRule.WE },
            4: { byweekday: RRule.TH },
            5: { byweekday: RRule.FR },
            6: { byweekday: RRule.SA },
            7: { byweekday: RRule.SU }
        }[declaracao.dia];
    }

    if(declaracao.periodicidade === 'mensal') {
        return {
            bymonthday: [ declaracao.dia ]
        };
    }

    if(declaracao.periodicidade === 'anual') {
        return {};
    }
}

function obterFrequencia(declaracao) {
    return _.extend(frequencias[declaracao.periodicidade], obterIntervalo(declaracao));
}

function toDate(data) {
    return new Date(data);
}

function Recorrencia(declaracao) {
    var regra = _.extend({
        dtstart: declaracao.proximaOcorrencia || new Date()
    }, obterFrequencia(declaracao));

    this.rule = new RRule(regra);
}

Recorrencia.prototype.proxima = function() {
    var proxima = this.proximas(1);
    return proxima[0] || null;
};

Recorrencia.prototype.proximas = function(count) {
    return this.rule.all(function (date, index) {
        return index < count;
    }).map(toDate);
};

Recorrencia.prototype.entre = function(dataInicial, dataFinal) {
    if(dataInicial.toDate) {
        dataInicial = dataInicial.toDate();
    }

    if(dataFinal.toDate) {
        dataFinal = dataFinal.toDate();
    }

    return this.rule.between(dataInicial, dataFinal, true).map(toDate);
};

module.exports = Recorrencia;

