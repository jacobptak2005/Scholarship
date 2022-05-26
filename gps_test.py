import pubnub
from pubnub.pnconfiguration import PNConfiguration
from pubnub.pubnub import PubNub
from pubnub.callbacks import SubscribeCallback
from pubnub.enums import PNOperationType, PNStatusCategory

pnconfig = PNConfiguration()
pnconfig.subscribe_key = "YOUR SUBSCRIBE KEY"
pnconfig.publish_key = "YOUR PUBLISH KEY"
pnconfig.ssl = False
pubnub = PubNub(pnconfig)

def publish_callback(result, status):
    pass

dictionary = {"latitude": gps.latitude, "longitude": gps.longitude}

pubnub.publish().channel("CHANNEL").message(dictionary).pn_async(publish_callback)