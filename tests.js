var moment = require('moment'),
    Recorrencia = require('./index');

function obterData(data) {
    return new moment(data + '12:00:00', 'DD/MM/YYYY HH:mm:ss').toDate();
}

function obterDataYYYYMMDD(data) {
    return new moment(data + '12:00:00', 'YYYY-MM-DD HH:mm:ss').toDate();
}

module.exports = {
    'Verifica recorrencia semanal na segunda-feira': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'semanal',
            dia: 1,
            proximaOcorrencia: obterData('18/07/2016')
        });

        test.deepEqual(recorrencia.proximas(4), [
            obterDataYYYYMMDD('2016-07-18'),
            obterDataYYYYMMDD('2016-07-25'),
            obterDataYYYYMMDD('2016-08-01'),
            obterDataYYYYMMDD('2016-08-08')
        ]);

        test.done();
    },

    'Verifica recorrencia semanal na terça-feira': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'semanal',
            dia: 2,
            proximaOcorrencia: obterData('19/07/2016')
        });

        test.deepEqual(recorrencia.proximas(4), [
            obterDataYYYYMMDD('2016-07-19'),
            obterDataYYYYMMDD('2016-07-26'),
            obterDataYYYYMMDD('2016-08-02'),
            obterDataYYYYMMDD('2016-08-09')
        ]);

        test.done();
    },

    'Verifica recorrencia semanal na quarta-feira': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'semanal',
            dia: 3,
            proximaOcorrencia: obterData('20/07/2016')
        });

        test.deepEqual(recorrencia.proximas(4), [
            obterDataYYYYMMDD('2016-07-20'),
            obterDataYYYYMMDD('2016-07-27'),
            obterDataYYYYMMDD('2016-08-03'),
            obterDataYYYYMMDD('2016-08-10')
        ]);

        test.done();
    },

    'Verifica recorrencia semanal na quinta-feira': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'semanal',
            dia: 4,
            proximaOcorrencia: obterData('21/07/2016')
        });

        test.deepEqual(recorrencia.proximas(4), [
            obterDataYYYYMMDD('2016-07-21'),
            obterDataYYYYMMDD('2016-07-28'),
            obterDataYYYYMMDD('2016-08-04'),
            obterDataYYYYMMDD('2016-08-11')
        ]);

        test.done();
    },

    'Verifica recorrencia semanal na sexta-feira': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'semanal',
            dia: 5,
            proximaOcorrencia: obterData('22/07/2016')
        });

        test.deepEqual(recorrencia.proximas(4), [
            obterDataYYYYMMDD('2016-07-22'),
            obterDataYYYYMMDD('2016-07-29'),
            obterDataYYYYMMDD('2016-08-05'),
            obterDataYYYYMMDD('2016-08-12')
        ]);

        test.done();
    },

    'Verifica recorrencia semanal no sábado': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'semanal',
            dia: 6,
            proximaOcorrencia: obterData('23/07/2016')
        });

        test.deepEqual(recorrencia.proximas(4), [
            obterDataYYYYMMDD('2016-07-23'),
            obterDataYYYYMMDD('2016-07-30'),
            obterDataYYYYMMDD('2016-08-06'),
            obterDataYYYYMMDD('2016-08-13')
        ]);

        test.done();
    },

    'Verifica recorrencia semanal no domingo': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'semanal',
            dia: 7,
            proximaOcorrencia: obterData('24/07/2016')
        });

        test.deepEqual(recorrencia.proximas(4), [
            obterDataYYYYMMDD('2016-07-24'),
            obterDataYYYYMMDD('2016-07-31'),
            obterDataYYYYMMDD('2016-08-07'),
            obterDataYYYYMMDD('2016-08-14')
        ]);

        test.done();
    },

    'Verifica recorrencia mensal dia fixo': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'mensal',
            dia: 22,
            proximaOcorrencia: obterData('22/07/2016')
        });

        test.deepEqual(recorrencia.proximas(4), [
            obterDataYYYYMMDD('2016-07-22'),
            obterDataYYYYMMDD('2016-08-22'),
            obterDataYYYYMMDD('2016-09-22'),
            obterDataYYYYMMDD('2016-10-22')
        ]);

        test.done();
    },

    'Verifica recorrencia bimestral dia fixo': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'bimestral',
            dia: 22,
            proximaOcorrencia: obterData('22/07/2016')
        });

        test.deepEqual(recorrencia.proximas(4), [
            obterDataYYYYMMDD('2016-07-22'),
            obterDataYYYYMMDD('2016-09-22'),
            obterDataYYYYMMDD('2016-11-22'),
            obterDataYYYYMMDD('2017-01-22')
        ]);

        test.done();
    },

    'Verifica recorrencia trimestral dia fixo': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'trimestral',
            dia: 22,
            proximaOcorrencia: obterData('22/07/2016')
        });

        test.deepEqual(recorrencia.proximas(4), [
            obterDataYYYYMMDD('2016-07-22'),
            obterDataYYYYMMDD('2016-10-22'),
            obterDataYYYYMMDD('2017-01-22'),
            obterDataYYYYMMDD('2017-04-22')
        ]);

        test.done();
    },

    'Verifica recorrencia semestral dia fixo': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'semestral',
            dia: 22,
            proximaOcorrencia: obterData('22/07/2016')
        });

        test.deepEqual(recorrencia.proximas(4), [
            obterDataYYYYMMDD('2016-07-22'),
            obterDataYYYYMMDD('2017-01-22'),
            obterDataYYYYMMDD('2017-07-22'),
            obterDataYYYYMMDD('2018-01-22')
        ]);

        test.done();
    },

    'Verifica recorrencia anual dia fixo': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'anual',
            dia: 22,
            proximaOcorrencia: obterData('22/07/2016')
        });

        test.deepEqual(recorrencia.proximas(4), [
            obterDataYYYYMMDD('2016-07-22'),
            obterDataYYYYMMDD('2017-07-22'),
            obterDataYYYYMMDD('2018-07-22'),
            obterDataYYYYMMDD('2019-07-22')
        ]);

        test.done();
    },

    'Verifica que método `.proximas()` retorna objetos do tipo Date': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'anual',
            dia: 22,
            proximaOcorrencia: obterData('22/07/2016')
        });

        recorrencia.proximas(4).forEach(function (data) {
            test.ok(data instanceof Date);
        });

        test.done();
    },

    'Método `.proxima()` retorna a proxima ocorrencia': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'anual',
            dia: 22,
            proximaOcorrencia: obterData('22/07/2016')
        });

        test.deepEqual(recorrencia.proxima(), obterDataYYYYMMDD('2016-07-22'));

        test.done();
    },

    'Verifica que método `.proxima()` retorna objeto do tipo Date': function(test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'anual',
            dia: 22,
            proximaOcorrencia: obterData('22/07/2016')
        });

        var data = recorrencia.proxima();

        test.ok(data instanceof Date);
        test.done();
    },

    'Verifica recorrencias nos próximos 90 dias': function (test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'mensal',
            dia: 22,
            proximaOcorrencia: obterData('22/07/2016')
        });

        var agora = obterData('20/07/2016'),
            em90Dias = new moment(agora).add(90, 'days');

        test.deepEqual(recorrencia.entre(agora, em90Dias), [
            obterDataYYYYMMDD('2016-07-22'),
            obterDataYYYYMMDD('2016-08-22'),
            obterDataYYYYMMDD('2016-09-22')
        ]);

        test.done();
    },

    'Verifica que método `.entre()` retorna objetos do tipo Date': function (test) {
        var recorrencia = new Recorrencia({
            periodicidade: 'mensal',
            dia: 22,
            proximaOcorrencia: obterData('22/07/2016')
        });

        var agora = obterData('20/07/2016'),
            em90Dias = new moment(agora).add(90, 'days');

        recorrencia.entre(agora, em90Dias).forEach(function (data) {
            test.ok(data instanceof Date);
        });

        test.done();
    }
};