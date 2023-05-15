new layer(

const { Layer, Network } = window.synaptic;

var inputLayer = new Layer(2);
var hiddenLayer = new Layer(3);
var outputLayer = new Layer(1);


inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

var myNetwork = new Network({
input: inputLayer,
hidden: [hiddenLayer],
output: outputLayer
});
