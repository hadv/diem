initSidebarItems({"fn":[["dump_all_metrics_to_file_periodically",""],["get_all_metrics",""]],"macro":[["register_histogram","Create a [`Histogram`] and registers to default registry."],["register_histogram_vec","Create a [`HistogramVec`] and registers to default registry."],["register_int_counter","Create an [`IntCounter`] and registers to default registry."],["register_int_counter_vec","Create an [`IntCounterVec`] and registers to default registry."],["register_int_gauge","Create an [`IntGauge`] and registers to default registry."],["register_int_gauge_vec","Create an [`IntGaugeVec`] and registers to default registry."]],"mod":[["counters",""],["metric_server",""]],"struct":[["DurationHistogram","A small wrapper around Histogram to handle the special case of duration buckets. This Histogram will handle the correct granularity for logging time duration in a way that fits the used buckets."],["Histogram","A [`Metric`] counts individual observations from an event or sample stream in configurable buckets. Similar to a `Summary`, it also provides a sum of observations and an observation count."],["OpMetrics",""]],"type":[["HistogramVec","A [`Collector`] that bundles a set of Histograms that all share the same [`Desc`], but have different values for their variable labels. This is used if you want to count the same thing partitioned by various dimensions (e.g. HTTP request latencies, partitioned by status code and method)."],["IntCounter","The integer version of [`Counter`]. Provides better performance if metric values are all integers."],["IntCounterVec","The integer version of [`CounterVec`]. Provides better performance if metric values are all integers."],["IntGauge","The integer version of [`Gauge`]. Provides better performance if metric values are all integers."],["IntGaugeVec","The integer version of [`GaugeVec`]. Provides better performance if metric values are all integers."]]});