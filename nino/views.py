from flask import render_template, Blueprint, request
import ujson

from . import config

app_views = Blueprint('app_views', __name__,
                      template_folder=config.TEMPLATE_FOLDER)


@app_views.route('/<path:path>')
@app_views.route('/')
def hello_world(path=None):
    return render_template('index.html', config=config)


@app_views.route('/api/search', methods=['POST'])
def search():
    data = ujson.loads(request.data)
    term = data.get('term')
    results = [
        {
            'name': '1',
            'data': 'Now then, some cheese please, my good man.'
        },
        {
            'name': '2',
            'data': '(lustily) Certainly, sir. What would you like?'
        },
        {
            'name': '3',
            'data': 'Well, eh, how about a little red Leicester.'
        },
        {
            'name': '4',
            'data': 'I\'m, a-fraid we\'re fresh out of red Leicester, sir.'
        }
    ]

    if term:
        for result in results:
            result['data'] = result['data'].replace(term, '<em>{}</em>'.format(term))

    return ujson.dumps(results)
