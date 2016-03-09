# Chat-Application
Netdata Sohbet Uygulaması
=============
Sohbete bağlanan tüm kullanıcılarla anlık olarak sohbet edebileceğiniz bir chat uygulaması. Uygulama Netdata'nın sunduğu SocketIo hizmetini kullanarak tarayıcıyı yenlemeden ve sürekli istek göndermeden anlık olarak mesajları kullanıcılara iletir. Ayrıca iletilen tüm veriler Netdata üzerinde oluşturulan projeye kaydedilir ve kullanıcı istediği zaman ulaşabilir.

Bu çalışmanın amacı Netdata üzerinden yapabileceklerinizin bir sınırının olmadığını göstermektir.
Eğer netdata üzerinde bir projeniz varsa dışardan bu projenize erişip ekleme/silme/güncelleme gibi işlemleri Netdata'ya bağlı kalmaksızın yazdığınız uygulama içerisinde gerçekleştirebilirsiniz.

Netdata üzerinden veri çekme
=============
Netdata size birden fazla veri çekme yöntemi sunmaktadır. XML,JSON,SOAP Webservice ve IFRAME size sunduğumuz veri çekme yöntemleridir. Ayrıca verilerinizi URL bazlı filtreleme yaparak dilediğiniz sql sorgularını yazabilir ve sorgu sonucu üretilen verileri uygulamanızda kullanabilirsiniz. Nerede Ne Var uygulaması için Main.aspx ve Admin.aspx sayfalarında XML türünden veriler çektik. Eğer bir projeniz varsa ve dışardan erişime açtıysanız tek yapmanız gereken uygun veri çekme formatını seçmek.

BAĞLANTININ KURULMASI
=============
Bağlantının kurulması için öncelikle global olarak socket isminde (veya istenilen bir isimde ) bir nesne oluşturulmalıdır. Nesnenin global olarak oluşturulmasının sebebi bu nesne ile hem veri alacağız hem de veri göndereceğiz ve veri gönderme işlemi farklı fonksiyonlar tarafından da yapılabileceği için socket nesnesi global tanımlanmalıdır.
Daha sonra connecttoNetdataSocketIO  fonksiyonuna benzer bir fonksiyon hazırlanmalıdır. Bu fonksiyonda socket = io.connect("http://www.netdata.com:8888"); komutuyla Netdata sunucusuna bağlantı başlatılır. Daha sonra socket.on() ile başlayan tüm fonsiyonlar başlangıçta oluşturulan connecttoNetdataSocketIO  fonksiyonu içerisinde yazılmalıdır.
var socket = null;

    function connecttoNetdataSocketIO (apiKey,socketName) {
        if (socket == null) {
            socket = io.connect("http://www.netdata.com:8888");
           //socket.on() fonksiyonları bu kısıma yazılmalı
        }
       else{
           alert(“Bağlantı daha önce kurulmuş”);
       }
    }
                
