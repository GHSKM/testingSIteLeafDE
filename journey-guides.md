---
permalink: "/guides/"
layout: default
---

 <div class="row">
    {% for guide in site.guides %}
    <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="thumbnail text-center">       
            <img src= "{{site.baseurl}}{{ guide.thumbnail }}" alt="" class="img-responsive not-package">
              <div class="caption">
                <h4> <b> {{ guide.title }} </b></h4>
                 <h5>  {{ guide.excerpt  }}</h5>                
                <p>{{ guide.description }}</p>
                  <p><a href="{{ site.baseurl }}{{ guide.url }}" class="button" role="button">View More</a> </p>
            </div>
          </div>
        </div>
{% endfor %}
</div>