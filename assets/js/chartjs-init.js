! function(i) {
    "use strict";
    var r = function() {};
    r.prototype.respChart = function(r, e, o, a) {
        Chart.defaults.global.defaultFontColor = "rgba(255,255,255,0.5)";
        var t = r.get(0).getContext("2d"),
            d = i(r).parent();

        function n() {
            r.attr("width", i(d).width());
            switch (e) {
                case "Line":
                    new Chart(t, {
                        type: "line",
                        data: o,
                        options: a
                    });
                    break;
                case "Doughnut":
                    new Chart(t, {
                        type: "doughnut",
                        data: o,
                        options: a
                    });
                    break;
                case "Pie":
                    new Chart(t, {
                        type: "pie",
                        data: o,
                        options: a
                    });
                    break;
                case "Bar":
                    new Chart(t, {
                        type: "bar",
                        data: o,
                        options: a
                    });
                    break;
                case "Radar":
                    new Chart(t, {
                        type: "radar",
                        data: o,
                        options: a
                    });
                    break;
                case "PolarArea":
                    new Chart(t, {
                        data: o,
                        type: "polarArea",
                        options: a
                    })
            }
        }
        i(window).resize(n), n()
    }, r.prototype.init = function() {
        this.respChart(i("#lineChart"), "Line", {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","December"],
            datasets: [{
                label: "Sales Analytics",
                fill: !0,
                lineTension: .5,
                backgroundColor: "rgba(89, 206, 181, 0.3)",
                borderColor: "#59ceb5",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                pointBorderColor: "#59ceb5",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#59ceb5",
                pointHoverBorderColor: "#59ceb5",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80, 33, 48]
            }, {
                label: "Monthly Earnings",
                fill: !0,
                lineTension: .5,
                backgroundColor: "rgba(221, 221, 221, 0.3)",
                borderColor: "#ddd",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                pointBorderColor: "#ddd",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#ddd",
                pointHoverBorderColor: "#ccc",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36, 99, 7]
            }]
        }, {
            scales: {
                yAxes: [{
                    ticks: {
                        max: 100,
                        min: 20,
                        stepSize: 10
                    }
                }]
            }
        });
        this.respChart(i("#doughnut"), "Doughnut", {
            labels: ["Desktops", "Tablets"],
            datasets: [{
                data: [300, 210],
                backgroundColor: ["#59ceb5", "#365d6e"],
                borderColor: "transparent",
                innerRadius: "55%",
                hoverBackgroundColor: ["#59ceb5", "#365d6e"],
                hoverBorderColor: "#aaa"
            }]
        });
        this.respChart(i("#pie"), "Pie", {
            labels: ["Desktops", "Tablets"],
            datasets: [{
                data: [300, 180],
                backgroundColor: ["#59ceb5", "#365d6e"],
                hoverBackgroundColor: ["#59ceb5", "#365d6e"]
            }]
        });
        this.respChart(i("#bar"), "Bar", {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
            datasets: [{
                label: "Sales Analytics",
                backgroundColor: "rgba(54, 93, 110, 0.4)",
                borderColor: "#365d6e",
                borderWidth: 2,
                hoverBackgroundColor: "rgba(54, 93, 110, 0.4)",
                hoverBorderColor: "#365d6e",
                barPercentage: .3,
                categoryPercentage: .5,
                data: [65, 59, 81, 45, 56, 80, 50, 20, 81, 50, 14]
            }]
        }, {
            responsive: !0,
            scales: {
                xAxes: [{
                    barPercentage: .8,
                    categoryPercentage: .4,
                    display: !0
                }]
            }
        });
        this.respChart(i("#radar"), "Radar", {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "Desktops",
                backgroundColor: "rgba(89, 206, 181, 0.4)",
                borderColor: "#59ceb5",
                pointBackgroundColor: "#59ceb5",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#59ceb5",
                pointHoverBorderColor: "#59ceb5",
                data: [65, 59, 90, 81, 56, 55, 40],
                datasetStroke: "true"
            }, {
                label: "Tablets",
                backgroundColor: "rgba(54, 93, 110, 0.4)",
                borderColor: "#365d6e",
                pointBackgroundColor: "#365d6e",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#365d6e",
                pointHoverBorderColor: "#365d6e",
                data: [28, 48, 40, 19, 96, 27, 100],
                datasetStroke: "true"
            }]
        }, {
            scale: {
                gridLines: {
                    color: "#ddd"
                },
                angleLines: {
                    color: "#ddd"
                }
            }
        });
        this.respChart(i("#polarArea"), "PolarArea", {
            datasets: [{
                data: [11, 16, 7, 18],
                backgroundColor: ["#365d6e", "#59ceb5", "#aaaaaa", "#eef0f6"],
                borderColor: "#ddd",
                label: "My dataset",
                hoverBorderColor: "#aaa"
            }],
            labels: ["Series 1", "Series 2", "Series 3", "Series 4"]
        }, {
            scale: {
                gridLines: {
                    color: "#ddd"
                },
                angleLines: {
                    color: "#ddd"
                }
            }
        })
    }, i.ChartJs = new r, i.ChartJs.Constructor = r
}(window.jQuery),
function(r) {
    "use strict";
    window.jQuery.ChartJs.init()
}();