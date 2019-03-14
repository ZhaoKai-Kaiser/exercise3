describe('jQuery', function () {
  it('should have jQuery', function () {
    if (!window.jQuery) {
      throw new Error('查看下 karma.conf.js 配置项 files 是否正确')
    }
  })

  it('should able to get a body', function () {
    var $body = $('body')
    $body.length.should.equal(1)
    $body[0].should.equal(document.getElementsByTagName('body')[0])
  })

  describe('should able to trigger an event', function () {
    var ele
    before(function () {
      ele = document.createElement('button')
      document.body.appendChild(ele)
    })

    it('should able trigger an event', function (done) {
      $(ele)
        .on('click', function () {
          done()
        })
        .trigger('click', function () {
          console.log('点击事件触发了')
        })
    })

    after(function () {
      document.body.removeChild(ele)
      ele = null
    })
  })

  it('should able to request https://raw.githubusercontent.com/FE-star/exercise1/master/test/test.js', function (done) {
    // 使用 jQuery.ajax 请求 https://raw.githubusercontent.com/FE-star/exercise1/master/test/test.js，并验证是否拿到文件
    let dataType = 'text' // html,text js文件内容将以纯文本格式返回
    $.ajax({
      headers: { 'Content-Type': 'text/plain' },
      async: true,
      type: 'GET',
      dataType: dataType,
      url:
        'https://raw.githubusercontent.com/FE-star/exercise1/master/test/test.js',
      success: function (res) {
        console.log('success:', dataType)
        done()
      },
      error: function () {
        console.log('error: ', dataType)
        done()
      }
    })
  })
})
