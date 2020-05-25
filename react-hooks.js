* React Hooksで関数コンポーネントでもライフサイクルを扱う
    * useEffect()を使う
        * useEffect()のメリット
            * ライフサイクルメソッドを代替できる
            * Functional Componentでライフサイクルを使える（記述量が減る）
            * コードをまとめられる
                * クラスコンポーネントだとマウントごとに記述しないといけなかった
                * ⭕機能ベース（何をやっているのか）
                * ❌時の流れベース（ライフサイクルのメソッドごと）
    * useEffect()の仕組み
        * レンダーごとにuseEffect()内の処理が走る
        * 代替できるメソッドは以下
            * componentDidMount()
            * componentDidUpdate()
            * componentWillUnmount()
    * 使い方
        * パターン①
            * レンダーごとに実行
                * 基本の形
                * useEffect()内にCallback関数を書く
                * Callbackはレンダーごとに呼ばれる
                * returnするCallback関数はアンマウント時に呼ばれる。（クリーンアップ関数）
        * パターン②
            * マウント時のみ実行
                * 第二引数の配置内の値を前回のレンダーと今回のレンダーで比較する。
                    * 変更があればCallback関数を実行
                * 第二引数に空の配列を渡すと最初の1回（マウント時）のみ実行される
        * パターン③
            * マウント&アンマウント時に実行
                * ①と②の複合系
                * 通常時のCallbackはマウント時のみ。
                * アンマウント時はreturn内のクリーンアップ関数が実行される
        * パターン④
            * 特定のレンダー時のみ実行
                * マウント時に実行される
                * limitの値が変わったときに実行される
                    * true→falseになったとき等
    * useCallback()
        * 使うメリット
            * 通常時
                * コンポーネント内で宣言したコールバック関数はrenderごとに生成される
            * useCallback()を使うと…
                * コールバック関数の再生成を抑止＝不変値化
                * クラスコンポーネントのbind()と似た役割
        * 使い方
            * 文法
                * useCallback(() => {}, [hoge]);
                * 　　　　コールバック関数　　deps（再描画の条件）
                * 子コンポーネントにpropsで関数を渡す場合に使う
                * クラスコンポーネントとの比較
                
                関数コンポーネントでuseCallback()を使う
                // 問合せフォーム用モーダルを閉じるCallback関数
                const handleClose = useCallback(() => {
                  setOpen(false)
                }, [setOpen]);

                クラスコンポーネント
                this.handleClose = this.handleClose.bind(this)
                // 中略
                handleClose = () => {
                  this.setState({ open: false })
                };
                
                