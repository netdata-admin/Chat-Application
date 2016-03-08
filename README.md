# Chat-Application
Netdata Sohbet Uygulaması
=============
Sohbete bağlanan tüm kullanıcılarla anlık olarak sohbet edebileceğiniz bir chat uygulaması. Uygulama Netdata'nın sunduğu SocketIo hizmetini kullanarak tarayıcıyı yenlemeden ve sürekli istek göndermeden anlık olarak mesajları kullanıcılara iletir. Ayrıca iletilen tüm veriler Netdata üzerinde oluşturulan projeye kaydedilir ve kullanıcı istediği zaman ulaşabilir.

Bu çalışmanın amacı Netdata üzerinden yapabileceklerinizin bir sınırının olmadığını göstermektir.
Eğer netdata üzerinde bir projeniz varsa dışardan bu projenize erişip ekleme/silme/güncelleme gibi işlemleri Netdata'ya bağlı kalmaksızın yazdığınız uygulama içerisinde gerçekleştirebilirsiniz.

Netdata üzerinden veri çekme
=============
Netdata size birden fazla veri çekme yöntemi sunmaktadır. XML,JSON,SOAP Webservice ve IFRAME size sunduğumuz veri çekme yöntemleridir. Ayrıca verilerinizi URL bazlı filtreleme yaparak dilediğiniz sql sorgularını yazabilir ve sorgu sonucu üretilen verileri uygulamanızda kullanabilirsiniz. Nerede Ne Var uygulaması için Main.aspx ve Admin.aspx sayfalarında XML türünden veriler çektik. Eğer bir projeniz varsa ve dışardan erişime açtıysanız tek yapmanız gereken uygun veri çekme formatını seçmek.

SocketId ile Projeye Veri Ekleme / Silme / Güncelleme - Yazılacak
=============
Netdata'nın sizlere sunduğu çözümlerden bir taneside AccPo ile verilerinizi dışardan göndereceğiniz bir WebRequest ile değiştirebilmektir. [Burada](https://github.com/netdata-admin/YoutubeTrends/wiki) AccPo'nun örnek kullanımı yer almaktadır.
